
import React, { Component } from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import PageHeader from "@atlaskit/page-header";
import { BreadcrumbsStateless, BreadcrumbsItem } from "@atlaskit/breadcrumbs";
import Button, { ButtonGroup } from "@atlaskit/button";
import TextField from "@atlaskit/textfield";
import Select from "@atlaskit/select";
import {Link} from 'react-router-dom';

const breadcrumbs = (
  <BreadcrumbsStateless onExpand={() => {}}>
    <BreadcrumbsItem text="sample continer" key="Sample container" />
    <BreadcrumbsItem text="Home" key="Parent page" />
  </BreadcrumbsStateless>
);
const actionsContent = (
  <ButtonGroup>
    {/* <Button appearance="primary">Primary Action</Button>
    <Button>Default</Button> */}
    <Button>...</Button>
  </ButtonGroup>
);
const barContent = (
  <div style={{ display: "flex" }}>
    <div style={{ flex: "0 0 200px" }}>
      <TextField isCompact placeholder="Filter" aria-label="Filter" />
    </div>
    <div style={{ flex: "0 0 200px", marginLeft: 8 }}>
      <Select
        spacing="compact"
        placeholder="Choose an option"
        aria-label="Choose an option"
      />
    </div>
  </div>
);

export default class ReportsPage extends Component {
  render() {
    return (
      <Page>
        <Grid>
          <GridColumn
            //Left padding
            medium={2}
          />
          <GridColumn medium={8}
          //Main content
          >
            <PageHeader
              breadcrumbs={breadcrumbs}
              actions={actionsContent}
              // bottomBar={barContent}
            >
              Reports
            </PageHeader>
            <p>
              This page is a stub
            </p>
          </GridColumn>
          <GridColumn
            //right padding
            medium={2}
          />
        </Grid>
      </Page>
    );
  }
}
