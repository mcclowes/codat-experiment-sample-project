import React from "react";
import Page from "../../components/Page";
import { Text, Loader } from "../../components/Primitives";

const Companies = (props) => {
  return (
    <Page>
      <div>
        <Text.Header>Companies</Text.Header>

        <Text>
          <a
            href="https://link.codat.io/client/042399f5-d104-4f38-9ce8-cac3524f4e88?user=0cdff739-aeb9-40dd-87ee-0e0bc17184c8"
            target="_blank"
          >
            Invite URL
          </a>
        </Text>
      </div>

      <div>
        {props.companies ? (
          props.companies.map((company, i) => {
            return (
              <Text key={i}>
                {company.name} -{" "}
                <a
                  href={`https://app.codat.io/assess/${company.id}`}
                  target="_blank"
                >
                  See details
                </a>
              </Text>
            );
          })
        ) : (
          <Loader />
        )}
      </div>
    </Page>
  );
};

export default Companies;
