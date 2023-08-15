import {
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useBreakpointValue,
  Heading,
  Link,
  DrawerHeader,
  DrawerFooter,
  Divider,
} from "@chakra-ui/react";
import { useRef } from "react";
import {
  StyledDrawerContainer,
  StyledHeader,
  StyledLogo,
  StyledLogoSpan,
  StyledNavMenu,
  StyledNavDrawer,
  StyledDrawerSocialMedia,
} from "./styles";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Instagram, WhatsApp, Telegram, LinkedIn } from "@mui/icons-material";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <StyledHeader>
        <StyledDrawerContainer>
          <StyledLogo>
            <Heading as="h2" size="xl" color="#8230C7">
              Growth
            </Heading>
            <StyledLogoSpan>
              <Heading as="h6" size="xs" color="#fff">
                TECHNOLOGY
              </Heading>
            </StyledLogoSpan>
          </StyledLogo>

          {!isMobile && ( // Renderiza o botão apenas em telas maiores (modo desktop)
            <StyledNavMenu>
              <Link>Home</Link>
              <Link>Quem Somos</Link>
              <Link>Serviços</Link>
              <Link>Nosso Time</Link>
              <Link>Contato</Link>
            </StyledNavMenu>
          )}

          {isMobile && (
            <>
              <Button ref={btnRef} colorScheme="#000000" onClick={onOpen}>
                <HamburgerIcon color="#6F38A6" boxSize={30} />
              </Button>
              <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
              >
                <DrawerOverlay />
                <DrawerContent bg="#000000">
                  <DrawerCloseButton colorScheme="#000000">
                    <CloseIcon boxSize={4} color="#fff" />
                  </DrawerCloseButton>

                  <DrawerHeader>
                    <StyledLogo>
                      <Heading as="h2" size="xl" color="#8230C7">
                        Growth
                      </Heading>
                      <StyledLogoSpan>
                        <Heading as="h6" size="xs" color="#fff">
                          TECHNOLOGY
                        </Heading>
                      </StyledLogoSpan>
                    </StyledLogo>
                  </DrawerHeader>

                  <Divider />

                  <DrawerBody>
                    <StyledNavDrawer>
                      <Link>Home</Link>
                      <Divider />

                      <Link>Quem Somos</Link>
                      <Divider />

                      <Link>Serviços</Link>
                      <Divider />

                      <Link>Nosso Time</Link>
                      <Divider />

                      <Link>Contato</Link>
                    </StyledNavDrawer>
                  </DrawerBody>

                  <DrawerFooter>
                    <StyledDrawerSocialMedia>
                      <a href="https://web.whatsapp.com/" target="_blank">
                      <WhatsApp fontSize="large" style={{ color:"green" }} />
                      </a>
                      <a href="https://www.instagram.com/" target="_blank">
                      <Instagram fontSize="large" style={{ color: "#8230C7" }} />
                      </a>
                      <a href="https://br.linkedin.com/" target="_blank">
                      <LinkedIn fontSize="large" style={{ color: "#00568F" }} />
                      </a>
                      <a href="https://web.telegram.org/" target="_blank">
                      <Telegram fontSize="large" style={{ color: "#13748F" }} />
                      </a>
                    </StyledDrawerSocialMedia>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </>
          )}
        </StyledDrawerContainer>
      </StyledHeader>
    </>
  );
};

export default Header;
