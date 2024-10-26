class ZIndexManager {
  private static instance: ZIndexManager;
  private baseIndex: number = 1000;
  private indexes: Map<string, number> = new Map();

  private constructor() {}

  static getInstance() {
    if (!ZIndexManager.instance) {
      ZIndexManager.instance = new ZIndexManager();
    }
    return ZIndexManager.instance;
  }

  // 为不同类型组件设置基础 zIndex
  private getBaseZIndex(type: string): number {
    const bases = {
      dialog: 1000,
      drawer: 900,
      popup: 800,
      tooltip: 700,
      dropdown: 600,
    };
    return bases[type as keyof typeof bases] || this.baseIndex;
  }

  // 获取新的 zIndex
  generate(type: string): number {
    const baseIndex = this.getBaseZIndex(type);
    const currentIndex = this.indexes.get(type) || baseIndex;
    const newIndex = currentIndex + 1;
    this.indexes.set(type, newIndex);
    return newIndex;
  }

  // 释放 zIndex
  release(type: string) {
    const currentIndex = this.indexes.get(type);
    if (currentIndex) {
      this.indexes.set(type, currentIndex - 1);
    }
  }
}

export const zIndexManager = ZIndexManager.getInstance();
