import { EventManager } from "../events";
import { IViewManager } from "../ui";

export class UnhandledErrorHandler {
    constructor(
        private readonly eventManager: EventManager,
        private readonly viewManager: IViewManager
    ) {
        this.eventManager.addEventListener("onError", this.handlerError.bind(this));
    }

    public handlerError(event: ErrorEvent): void {
        this.viewManager.notifyError("Oops, something went wrong.", "We are unable to complete your operation this time. Please try again later.");
    }
}