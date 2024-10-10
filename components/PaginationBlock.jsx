"use client";
import Link from "next/link";

const PaginationBlock = ({
  padding,
  classes,
  id,
  paginationLinks
}) => {
  let sectionPadding = "";
  padding.map((item) => {
    sectionPadding += " " + item;
  });
  return (
    <section
      className={`redirectLinks bg-[black]  py-[5.6rem] lg:py-[4rem] sm:!py-[3rem] ${classes} ${sectionPadding}`}
      id={id}
    >
      <div className="container">
        <div className="wrapper w-full relative flex flex-wrap justify-between">
          <Link
            className="pl-[3rem] left tertiary-btn !pr-[0] text-[white]"
            href={paginationLinks?.previousLink}
          >
            {paginationLinks?.previousLabel}
          </Link>
          <Link
            className="!pl-[3rem] tertiary-btn !pr-[0] text-[white]"
            href={paginationLinks?.nextLink}
          >
            {paginationLinks?.nextLabel}
          </Link>
        </div>
      </div>
    </section>
  );
};
export default PaginationBlock;
