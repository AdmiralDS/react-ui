import { findIndexOf, restoreContainer } from './utils';

export interface Modal {
  containerEl: Element;
  modalEl: Element;
}

interface Container {
  container: Element;
  modals: Modal[];
  restore: null | (() => void);
}

/**
 * State management for containers and the modals in those containers.
 * Used to ensure proper styling of containers
 * (hide vertical scrollbars, when modals exist, and restore initial styles for containers, when modals are unmounted).
 * the main idea is from https://github.com/mui-org/material-ui/blob/master/packages/mui-core/src/ModalUnstyled/ModalManager.ts
 */
class ModalManager {
  private containers: Container[];
  private modals: Modal[];

  constructor() {
    this.modals = [];
    this.containers = [];
  }

  add(modal: Modal, container: Element): number {
    let modalIndex = this.modals.indexOf(modal);
    if (modalIndex !== -1) {
      return modalIndex;
    }

    modalIndex = this.modals.length;
    this.modals.push(modal);

    const containerIndex = findIndexOf(this.containers, (item) => item.container === container);
    if (containerIndex !== -1) {
      this.containers[containerIndex].modals.push(modal);
      return modalIndex;
    }

    this.containers.push({
      modals: [modal],
      container,
      restore: null,
    });

    return modalIndex;
  }

  mount(modal: Modal): void {
    const containerIndex = findIndexOf(this.containers, (item) => item.modals.indexOf(modal) !== -1);
    const containerInfo = this.containers[containerIndex];

    if (!containerInfo.restore) {
      containerInfo.restore = restoreContainer(containerInfo.container);
    }
  }

  remove(modal: Modal): number {
    const modalIndex = this.modals.indexOf(modal);

    if (modalIndex === -1) {
      return modalIndex;
    }

    const containerIndex = findIndexOf(this.containers, (item) => item.modals.indexOf(modal) !== -1);
    const containerInfo = this.containers[containerIndex];

    containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
    this.modals.splice(modalIndex, 1);

    if (containerInfo.modals.length === 0) {
      if (containerInfo.restore) {
        containerInfo.restore();
      }
      this.containers.splice(containerIndex, 1);
    }

    return modalIndex;
  }
}

export const manager = new ModalManager();
