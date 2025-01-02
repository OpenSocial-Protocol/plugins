import classnames from "classnames";
import {
  getDefaultConfig,
  mergeConfigs,
  createTailwindMerge,
} from "tailwind-merge";

class TwMerge {
  static instance: TwMerge;
  private config: ReturnType<typeof mergeConfigs>;
  public twCn: ReturnType<typeof createTailwindMerge>;

  private constructor() {
    this.config = getDefaultConfig();
    this.twCn = createTailwindMerge(() => this.config);
  }

  public mergeConfig(config: Parameters<typeof mergeConfigs>[1]) {
    this.config = mergeConfigs<string, any>(this.config, config);
    this.updateTailwindMergeInstance();
  }

  private updateTailwindMergeInstance() {
    this.twCn = createTailwindMerge(() => this.config);
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new TwMerge();
    }
    return this.instance;
  }
}

const tw = TwMerge.getInstance();

export const mergeTwConfig = (config: Parameters<typeof mergeConfigs>[1]) => {
  tw.mergeConfig(config);
};

// Example of merging a custom configuration
mergeTwConfig({
  extend: {
    classGroups: {
      "font-size": [{ text: ["4.33xl"] }],
    },
  },
});

export const mergeTwCn = (...args: classnames.ArgumentArray): string => {
  return tw.twCn(classnames(args));
};

export const cn = mergeTwCn;
