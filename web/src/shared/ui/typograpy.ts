import { css } from "@emotion/react";
import { GenerateFontProps } from "../types";

const bold = 900;
const medium = 700;
const regular = 500;

export const generateFont = ({
  fontWeight,
  fontSize,
  lineHeight = "140%",
}: GenerateFontProps) => css`
  font-weight: ${fontWeight};
  font-size: ${fontSize}px;
  letter-spacing: -0.5px;
  line-height: ${lineHeight};
`;

export const B1 = generateFont({ fontSize: 30, fontWeight: medium });
export const B1_B = generateFont({ fontWeight: bold, fontSize: 30 });
export const H1 = generateFont({ fontWeight: bold, fontSize: 28 });
export const H2 = generateFont({ fontWeight: bold, fontSize: 22 });
export const H3 = generateFont({ fontWeight: medium, fontSize: 18 });
export const H3_B = generateFont({ fontWeight: bold, fontSize: 18 });
export const H3_R = generateFont({ fontWeight: regular, fontSize: 18 });

export const Body1 = generateFont({
  fontWeight: medium,
  fontSize: 16,
  lineHeight: "160%",
});
export const Body1_B = generateFont({
  fontWeight: bold,
  fontSize: 16,
  lineHeight: "160%",
});
export const Body1_R = generateFont({
  fontWeight: regular,
  fontSize: 16,
  lineHeight: "160%",
});
export const Body2 = generateFont({
  fontWeight: medium,
  fontSize: 14,
  lineHeight: "160%",
});
export const Body2_B = generateFont({
  fontWeight: bold,
  fontSize: 14,
  lineHeight: "160%",
});
export const Body2_R = generateFont({
  fontWeight: regular,
  fontSize: 14,
  lineHeight: "160%",
});

export const Feed_Body = generateFont({
  fontWeight: 500,
  fontSize: 18,
  lineHeight: "180%",
});
export const Feed_Caption1 = generateFont({
  fontWeight: 400,
  fontSize: 13,
  lineHeight: "140%",
});
export const Feed_Title = generateFont({
  fontWeight: 700,
  fontSize: 22,
  lineHeight: "140%",
});
export const Feed_Caption2 = generateFont({
  fontWeight: 400,
  fontSize: 12,
  lineHeight: "140%",
});

export const Caption1 = generateFont({ fontWeight: regular, fontSize: 13 });
export const Caption1_B = generateFont({ fontWeight: bold, fontSize: 13 });
export const Caption2 = generateFont({ fontWeight: regular, fontSize: 12 });
export const Caption2_B = generateFont({ fontWeight: bold, fontSize: 12 });
export const Caption3 = generateFont({ fontWeight: regular, fontSize: 9 });
export const Caption3_B = generateFont({ fontWeight: bold, fontSize: 9 });
