import { IWidgetBinding } from "../../editing";
import { WidgetModel } from "../../widgets";


export interface DragSession {
    /**
     * Type of object being dragged, e.g. Section, Widget, Row.
     */
    type: string;

    /**
     * Source element the dagging has started from.
     */
    sourceElement?: Element;

    /**
     * Model attached to dragged (source) element.
     */
    sourceModel: WidgetModel;

    /**
     * Widget binding attached to source element.
     */
    sourceBinding?: IWidgetBinding;

    /**
     * Model attached to parent of dragged element.
     */
    parentModel?: WidgetModel;

    /**
     * Widget bindhing of parent widget.
     */
    parentBinding?: IWidgetBinding;

    /**
     * Where to insert element in parent?
     */
    insertIndex?: number;

    /**
     * Accepting element.
     */
    targetElement?: Element;

    /**
     * Widget binding of accepting element.
     */
    targetBinding?: IWidgetBinding;
}