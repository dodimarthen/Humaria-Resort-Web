// Card.jsx
import { Card, CardFooter, Button } from "@nextui-org/react";

export default function CardComponent({ imageSrc, title }) {
  return (
    <Card isFooterBlurred radius="lg" className="border-none">
      <img
        alt={title}
        src={imageSrc}
        style={{ width: "25vh", height: "200px", objectFit: "cover" }}
      />

      <CardFooter className="before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 px-4 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">{title}</p>
      </CardFooter>
    </Card>
  );
}
