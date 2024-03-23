import { useState } from 'react';

interface AccordionTableData {
  th: string;
  td: string;
}

export default function AccordionTable({ title, accordionId, data }: {
    title: string,
    accordionId: string,
    data: AccordionTableData[]
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-table">
      <button
        id={`button-${accordionId}`}
        className="button button--accordion"
        aria-expanded={isOpen}
        aria-controls={`content-${accordionId}`}
        onClick={handleOpen}
      >
        <span className="button__text">{title}</span>
        <span
          className={`button__icon${isOpen ? ' button__icon--rotated' : ''}`}
          aria-hidden="true"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#303030" d="M6.102 8c-1.074 0-1.648 1.265-.94 2.073l5.52 6.31a1.75 1.75 0 0 0 2.635 0l5.522-6.31c.707-.808.133-2.073-.941-2.073H6.102Z"/></svg>
        </span>
      </button>
      {isOpen && data.length > 0 &&
      <table
        id={`content-${accordionId}`}
        role="region"
        aria-labelledby={`button-${accordionId}`}
        aria-hidden={!isOpen}
      >
        <tbody>
          {data.map((dataItem) => {
            return (
              <tr>
                <th>{dataItem.th}</th>
                <td>{dataItem.td}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      }
    </div>
  );
}