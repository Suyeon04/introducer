import { css } from '@emotion/react';
import Image from 'next/image';

export function LogoSection() {
    return (
        <div css={css`
        width: 100%;
        height: 100%;
        align-items: center;
        display: flex;
        background-color: #FF0000;
    `}>
            <Image
                src="https://live.staticflickr.com/65535/53613473843_c89efa4c94_m.jpg"
                width={150}
                height={150}
                alt="introducer logo"
            />
        </div>
    );
}
