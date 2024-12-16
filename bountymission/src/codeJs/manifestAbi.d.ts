declare module "@open-social-protocol/osp-plugin-api-types" {
  interface ContractGroup {
    deek: {
      refundQuest: (questId: string) => Promise<any>;
    };
  }
}

export {};
