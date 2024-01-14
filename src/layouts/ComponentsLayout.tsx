import NextLink from "next/link";
import { PATH_PAGE } from "@root/routes/paths";

const LINKS = [
  {
    link: PATH_PAGE.components,
    label: "Functional Components",
  },
  {
    link: PATH_PAGE.textFields,
    label: "Text Fields",
  },
];

export default function ComponentsLayout({ children }: any) {
  return (
    <>
      {/* <Box sx={{ padding: 6 }}>
        <Stack sx={{ mb: 3 }} direction={{ xs: "column", md: "row" }} gap={2}>
          {LINKS.map(({ link, label }) => (
            <NextLink
              key={link}
              href={link}
              style={{ textDecoration: "none", display: "block" }}
              passHref
            >
              <StyledLink>{label}</StyledLink>
            </NextLink>
          ))}
        </Stack>
        {children}
      </Box> */}
    </>
  );
}
