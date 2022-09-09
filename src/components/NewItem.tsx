import { Card } from "react-bootstrap";

type StoreItemProps = {
  imgUrl: string;
};
export function NewItem({ imgUrl }: StoreItemProps) {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="400px"
        style={{ objectFit: "cover" }}
      />
    </Card>
  );
}
