interface IBaseCard {
  title: string;
}

interface ISummaryCardContent {
  value: string;
  additionalText: string;
}

interface ILocationCardContent {
  text: string[];
}

export interface ISummaryCard extends IBaseCard {
  content: ISummaryCardContent;
}

export interface ILocationCard extends IBaseCard {
  image: string;
  content: ILocationCardContent;
}
