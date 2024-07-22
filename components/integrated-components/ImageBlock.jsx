import Image from 'next/image';


export default function ImageBlock( data ) {

    let sectionPadding = '';
    data.padding.map(item => {
      sectionPadding += ' ' + item;
    });
    return (
        <section className={`imageBlock grid__parallax dark no-padding-bottom ${data.classes} ${sectionPadding}`} id={data.id}>
            <div className="container">
                <div className="imageWrap">
                    {data.image && data.image.sourceUrl &&
                    <Image
                        className="h-[53.7] w-[104rem] mx-auto"
                        width={5000}
                        height={5000}
                        src={data.image.sourceUrl}
                        alt={data.image.altText}
                    />
                    }
                </div>
            </div>
        </section>
    )
}
