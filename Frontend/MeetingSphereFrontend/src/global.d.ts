declare namespace bootstrap {
  class Modal {
    constructor(element: Element, options?: any);
    static getInstance(element: Element): Modal | null;
    show(): void;
    hide(): void;
  }
}
