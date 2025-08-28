interface ItemProps {
  title: string
  description: string
  bg?: string
}

// * Wenn ich Daten von Eltern zum Kind schicken möchte, muss ich meine Komponente zu einer React.FC typisieren. So weiß dann React, dass die Daten ankommen. Zudem muss ich ein Interface schreiben, was die Daten beschreibt, die reinkommen sollen.

// * Über das Wort props kann ich dann final auf die Daten zugreifen (Objekt)

const Item: React.FC<ItemProps> = (props) => {
  return (
    <>
      <div className="item" style={{ backgroundColor: `${props.bg}` }}>
        {/* Die {} benöiten wir, damit wir JT/TS in HTML benutzen können. innerHTML etc gibt es nicht mehr in React */}

        <h5>Title: {props.title}</h5>
        <p>Desc: {props.description}</p>
      </div>
    </>
  )
}

export default Item
