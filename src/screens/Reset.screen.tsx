import React from "react";
// import { FormattedMessage } from "react-intl";
// import styled from "styled-components";

// import ResetForm from "../components/layouts/user/Reset.form";
// import ButtonLink from "../components/buttons/ButtonLink.component";

// import Box from "../components/elements/Box.component";
// import Columns from "../components/elements/Columns.component";
// import Column from "../components/elements/Column.component";
// import Message from "../components/elements/Message.component";

// import { validateToken } from "../stores/actions/user.action";

// const Content = styled.div`
//   height: 100%;
//   margin-top: 3rem;
// `;

// const Container = styled.div`
//   max-width: 80rem;
//   margin: auto;
// `;

// const Title = styled.h1`
//   font-size: 2rem;
//   font-weight: 600;
//   line-height: 1.125;
//   word-break: break-word;
//   text-align: center;
//   color: ${(props) => props.theme.font};
// `;

const Reset = (props:any) => {
  // const [loading, setLoading] = useState(true);
  // const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   validateToken(props.match.params.token)
  //     .then(() => {
  //       setLoading(false);
  //       setSuccess(true);
  //     })
  //     .catch(() => {
  //       setLoading(false);
  //       setSuccess(false);
  //     });
  //   // eslint-disable-next-line
  // }, []);

  return (
    <>Reset</>
    // <Content>
    //   <Container>
    //     <Columns centered>
    //       <Column className="is-6">
    //         <Box>
    //           <Title>
    //             <FormattedMessage id="account.reset" default="Reset password" />
    //           </Title>

    //           {loading && (
    //             <Message primary>
    //               <FormattedMessage id="utils.loading" default="Loading..." />
    //             </Message>
    //           )}

    //           {!loading && success && (
    //             <ResetForm {...props} token={props.match.params.token} />
    //           )}

    //           {!loading && !success && (
    //             <div className="has-text-centered">
    //               <Message danger>
    //                 <FormattedMessage
    //                   id="utils.invalid_access"
    //                   default="Invalid access..."
    //                 />
    //               </Message>

    //               <ButtonLink primary="true" to="/">
    //                 <FormattedMessage id="utils.back" default="Back" />
    //               </ButtonLink>
    //             </div>
    //           )}
    //         </Box>

    //         <ButtonLink className="is-pulled-right" text="true" to="/login">
    //           <FormattedMessage
    //             id="account.information_4"
    //             default="Already an account ? log in"
    //           />
    //         </ButtonLink>
    //       </Column>
    //     </Columns>
    //   </Container>
    // </Content>
  );
};

export default Reset;
