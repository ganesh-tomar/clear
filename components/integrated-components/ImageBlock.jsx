import Image from 'next/image';


export default function ImageBlock(data) {

    let sectionPadding = '';
    data.padding.map(item => {
        sectionPadding += ' ' + item;
    });
    return (
        <section className={`imageBlock grid__parallax dark ${data?.classes} ${sectionPadding}`} id={data.id}>
            <div className="container">
                <div className="imageWrap">
                    {data?.image && data?.image?.sourceUrl &&
                        <Image
                            className="h-full w-full object-cover"
                            width={5000}
                            height={5000}
                            src={data?.image?.sourceUrl}
                            alt={data?.image?.altText}
                        />
                    }
                </div>
            </div>
        </section>
    )
}
