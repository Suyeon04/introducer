import { LoginSection, LogoSection } from "@/widgets";
import { css } from '@emotion/react';

export default function LoginPage() {
    return (
        <>
            <div css={css`
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #FF0000;
`}>
                <LoginSection />
                <LogoSection />
            </div>
        </>
    );
}