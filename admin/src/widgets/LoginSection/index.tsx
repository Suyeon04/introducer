import { css } from '@emotion/react';
import Image from 'next/image';

export function LoginSection() {
    return (
        <div css={css`
        width: 100%;
        height: 100%;
        align-items: center;
        display: flex;
    `}>
            <Image
                src="https://live.staticflickr.com/65535/53613587084_4e1eff3bec_m.jpg"
                width={500}
                height={500}
                alt="Picture of the author"
            />
        </div>
    );
}
