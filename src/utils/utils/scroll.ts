
export interface ScrollToInContainerOptions {
  duration?: number;
  offset?: { x: number; y: number };
  easing?: string;
}
export const scrollToInContainer = (
  container: HTMLElement,
  target: HTMLElement,
  options: ScrollToInContainerOptions
) => {
  // 默认配置
  const defaults = {
    duration: 300,
    offset: { x: 0, y: 0 },
    easing: "linear", // 默认缓动函数
  };

  const { duration, offset, easing } = { ...defaults, ...(options || {}) };

  // 贝塞尔曲线计算函数
  function bezier(x1: number, y1: number, x2: number, y2: number) {
    function calcBezier(t: number, a1: number, a2: number) {
      return (
        3 * a1 * t * (1 - t) * (1 - t) + 3 * a2 * t * t * (1 - t) + t * t * t
      );
    }

    // 二分法求t值
    function getTForX(x: number) {
      let low = 0,
        high = 1;
      let t = x;

      // 迭代求解
      for (let i = 0; i < 8; i++) {
        const currentX = calcBezier(t, x1, x2) - x;
        if (currentX > 0) {
          high = t;
        } else {
          low = t;
        }
        t = (high - low) / 2 + low;
      }
      return t;
    }

    // 返回缓动函数
    return function (t: number) {
      if (t === 0 || t === 1) return t;
      return calcBezier(getTForX(t), y1, y2);
    };
  }

  // 内置常用缓动函数
  const builtInEasings: Record<string, (t: number) => number> = {
    linear: (t: number) => t,
    easeOutQuad: (t: number) => t * (2 - t),
    easeOutCubic: (t: number) => --t * t * t + 1,
    easeOutQuart: (t: number) => 1 - --t * t * t * t,
    easeOutQuint: (t: number) => 1 + --t * t * t * t * t,
    easeInOut: bezier(0.42, 0, 0.58, 1),
  };

  // 确定使用的缓动函数
  let easingFunc: (t: number) => number;
  if (typeof easing === "function") {
    // 直接使用自定义函数
    easingFunc = easing;
  } else if (Array.isArray(easing) && easing.length === 4) {
    // 使用贝塞尔曲线数组 [x1, y1, x2, y2]
    easingFunc = bezier(easing[0], easing[1], easing[2], easing[3]);
  } else if (typeof easing === "string") {
    // 使用内置缓动函数
    easingFunc = builtInEasings[easing] || builtInEasings.linear;
  } else {
    // 默认使用线性缓动
    easingFunc = builtInEasings.linear;
  }

  // 获取位置信息
  const containerRect = container.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();

  // 计算目标滚动位置（考虑偏移量）
  const targetX =
    targetRect.left - containerRect.left + container.scrollLeft - offset.x;
  const targetY =
    targetRect.top - containerRect.top + container.scrollTop - offset.y;

  // 初始滚动位置
  const startX = container.scrollLeft;
  const startY = container.scrollTop;

  // 计算滚动距离
  const distanceX = targetX - startX;
  const distanceY = targetY - startY;

  const startTime = performance.now();

  // 滚动动画
  function animate(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easingFunc(progress);

    // 应用滚动到容器
    container.scrollLeft = startX + distanceX * easedProgress;
    container.scrollTop = startY + distanceY * easedProgress;

    // 继续动画直到完成
    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }

  // 开始动画
  requestAnimationFrame(animate);
};
