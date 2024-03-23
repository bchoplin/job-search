import { useRef } from 'react';
import useElementOffset from '../../hooks/useElementOffset';

export default function Section({ sectionType = 'default', id = '', detectWidth = false, children }: {
  sectionType?: string,
  id?: string,
  detectWidth?: boolean,
  children?: React.ReactNode
}) {
  let sectionModifier = '';
  const sectionTextRef = useRef<HTMLDivElement>(null);
  const [sectionTextWidth, sectionTextScrollStatus] = useElementOffset(sectionTextRef);

  if (sectionTextWidth < 768 && detectWidth) {
    sectionModifier = ' section--has-overflow';
  }

  const ShadowLeft = () => {
    return <span className="shadow shadow--left"></span>;
  }

  const ShadowRight = () => {
    return <span className="shadow shadow--right"></span>;
  }

  return (
    <div className={`section section--${sectionType}${sectionModifier}`} id={id}>
      <div className="container">
        <div className="section__inner">
          {detectWidth &&
            <>
              {sectionTextScrollStatus.canScrollLeft &&
                <ShadowLeft />
              }
              {sectionTextScrollStatus.canScrollRight &&
                <ShadowRight />
              }
            </>
          }
          <div className="section__text" ref={sectionTextRef}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
