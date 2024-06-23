export type SystemData = {
  mdContent: string;
  cssContent: string;
  mdFlag: boolean;
  cssFlag: boolean;
  curResumeId: string | null;
  curResumeName: string;
  loaded: boolean;
};

export const useDataStore = defineStore("data", () => {
  const { DEFAULT } = useConstant();

  const data = reactive<SystemData>({
    mdContent: "",
    cssContent: "",
    mdFlag: false,
    cssFlag: false,
    curResumeId: null,
    curResumeName: DEFAULT.RESUME_NAME,
    loaded: false
  });

  const setData = <T extends keyof SystemData>(key: T, value: SystemData[T]) => {
    data[key] = value;
    if (key === "cssContent") setBackboneCss(value as string, "preview");
  };

  const toggleMdFlag = (to: boolean) => {
    data.mdFlag = to;
  };

  const toggleCssFlag = (to: boolean) => {
    data.cssFlag = to;
  };

  return {
    data,
    setData,
    toggleMdFlag,
    toggleCssFlag
  };
});
