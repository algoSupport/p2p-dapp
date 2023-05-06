import React from "react";
import ErrorImage from "../../images/gfx/error-404.svg";
import PageContainer from "../../layout/page-container/PageContainer";
import { Link } from "react-router-dom";
import { Block, BlockContent, Button } from "../../components/Component";

const Error404Modern = () => {
  return (
    <PageContainer>
      <Block className="nk-block-middle wide-md mx-auto">
        <BlockContent className="nk-error-ld text-center">
          <img className="nk-error-gfx" src={ErrorImage} alt="error" />
          <div className="wide-xs mx-auto">
            <h3 className="nk-error-title">Something is not right.</h3>
            <p className="nk-error-text">
              We are very sorry for inconvenience. It looks like you’re trying to access a page that is not available.
            </p>
            <Link to={`${process.env.PUBLIC_URL}/`}>
              <Button color="primary" size="md" className="mt-2">
                Dashboard
              </Button>
            </Link>
          </div>
        </BlockContent>
      </Block>
    </PageContainer>
  );
};
export default Error404Modern;
