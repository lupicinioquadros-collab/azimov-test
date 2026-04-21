import Frame812150 from "@/views/Frame812150";
import Frame330762 from "@/views/Frame330762";

export const routes = [{
          path: "/frame812150",
          component: Frame812150,
          guid: "812:150",
        },
{
          path: "/",
          component: Frame330762,
          guid: "330:762",
        }];


export const guidPathMap = new Map(
  routes.map((item) => [item.guid, item.path])
);
export const pathGuidMap = new Map(
  routes.map((item) => [item.path, item.guid])
);

export const getPathByGuid = (guid: string) => {
  return guidPathMap.get(guid) || "";
};

export const getGuidByPath = (path: string) => {
  return pathGuidMap.get(path) || "";
};
