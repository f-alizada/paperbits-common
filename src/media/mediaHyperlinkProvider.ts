import { MediaContract } from "../media/mediaContract";
import { PermalinkContract } from "../permalinks/permalinkContract";
import { IHyperlinkProvider } from "../ui/IHyperlinkProvider";
import { HyperlinkModel } from "../permalinks/hyperlinkModel";


export class MediaHyperlinkProvider implements IHyperlinkProvider {
    public readonly name: string = "Media";
    public readonly componentName = "media-selector";

    public canHandleHyperlink(permalink: PermalinkContract): boolean {
        return permalink.targetKey && permalink.targetKey.startsWith("uploads/");
    }

    public getHyperlinkFromResource(media: MediaContract): HyperlinkModel {
        const hyperlinkModel = new HyperlinkModel();
        hyperlinkModel.title = media.filename;
        hyperlinkModel.target = "_blank";
        hyperlinkModel.permalinkKey = media.permalinkKey;
        hyperlinkModel.type = "media";

        return hyperlinkModel;
    }
}