import React from "react";
// import { FormattedMessage } from "react-intl";
// import styled from "styled-components";

// import UserContext from "../stores/contexts/user.context";
// import ThemeSelect from "../components/helpers/Theme.helpers";
// import LangSelect from "../components/helpers/Lang.helpers";
// import AccountProfileForm from "../components/layouts/user/AccountProfile.form";
// import AccountPasswordForm from "../components/layouts/user/AccountPassword.form";
// import LinkSocialForm from "../components/layouts/user/LinkSocial.form";

// import Box from "../components/elements/Box.component";
// import Columns from "../components/elements/Columns.component";
// import Column from "../components/elements/Column.component";

// const Content = styled.div`
//   height: 100%;
//   margin-top: 3rem;
//   /* display: ${(props) => (props.show === 1 ? "none" : "flex")};
//   align-items: center;
//   justify-content: center;
//   flex-direction: column; */
//   /* overflow: hidden; */
// `;

// const Container = styled.div`
//   max-width: 80rem;
//   margin: auto;
// `;

// const Title = styled.div`
//   font-size: 22px;
//   font-weight: 800;
// `;

const Account = () => {
  // const { user } = useContext(UserContext);

  return (
    <>Account Screen</>
    // <Content>
    //   <Container>
    //     <Columns>
    //       <Column>
    //         <Title>Bonjour {user.firstName}</Title>
    //       </Column>
    //       <Column className="is-2">
    //         <Columns>
    //           <Column>
    //             <LangSelect />
    //           </Column>
    //           <Column>
    //             <ThemeSelect />
    //           </Column>
    //         </Columns>
    //       </Column>
    //     </Columns>

    //     <Columns>
    //       <Column>
    //         <Box>
    //           <Title className="has-text-centered">
    //             <FormattedMessage
    //               id="account.information_0"
    //               default="Basic information"
    //             />
    //           </Title>

    //           <AccountProfileForm />
    //         </Box>
    //       </Column>
    //       <Column>
    //         <Box>
    //           <Title className="has-text-centered">
    //             <FormattedMessage
    //               id="account.information_1"
    //               default="Change password"
    //             />
    //           </Title>

    //           <AccountPasswordForm />
    //         </Box>
    //       </Column>
    //     </Columns>

    //     <Columns vcentered="true">
    //       <Column className="is-6">
    //         <LinkSocialForm user={user} />
    //       </Column>
    //     </Columns>
    //   </Container>
    // </Content>
  );
};

export default Account;
