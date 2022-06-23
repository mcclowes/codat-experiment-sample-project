import React from "react";
import Page from "../../components/Page";
import { Text, Loader } from "../../components/Primitives";

const DataTypes = (props) => {
  return (
    <Page>
      <div>
        <Text.Header>Data types</Text.Header>

        <Text>
          <a href="https://app.codat.io/settings/data-types" target="_blank">
            Manage settings
          </a>
        </Text>
      </div>

      <div>
        {props.dataTypes ? (
          props.dataTypes.map((dataType, i) => {
            return (
              <Text key={i}>
                {dataType.dataType} | fetchOnFirstLink:{" "}
                {dataType.fetchOnFirstLink} | syncSchedule:{" "}
                {dataType.syncSchedule}
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

export default DataTypes;
