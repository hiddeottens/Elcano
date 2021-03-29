export enum Direction {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

export interface SideSlideProps {
  children?: React.ReactNode;
  show: boolean;
  onClose: () => void;
  direction?: Direction;
}
