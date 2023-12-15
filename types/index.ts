export interface cardTitleProps {
  title1: string;
  title2: string;
}

// image, title1, paragraph, price1, price2, discount

export interface productCardProps {
  image: string;
  title: string;
  paragraphText: string;
  price1?: string;
  price2?: string;
  discount?: string;
}
