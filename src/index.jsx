import ForgeUI, { useProductContext, render, useState, ProjectSettingsPage, Form, TextField, Button, Text, ModalDialog, Table, Head, Row, Cell } from '@forge/ui';
import { properties } from '@forge/api';

const App = () => {
  // Gets the product context when the app is loaded
  // This is where we'll get the projectKey of the Project Settings Page we are currently in
  const context = useProductContext();

  // useState is a UI kit hook we use to manage the data in local state
  const [isModalOpen, setModalOpen] = useState(false);
  const [teamSize, setTeamSize] = useState(async () => await properties.onJiraProject(context.platformContext.projectKey).get('team-size'));

  const onSubmit = async (formData) => {
    // Store the field value to a Jira project property called `team-size`
    await properties.onJiraProject(context.platformContext.projectKey).set('team-size', formData.teamSize);

    setModalOpen(false);
    setTeamSize(formData.teamSize);
  };

  return (
    <Table>
      <Head>
        <Cell>
          <Text>Project Field</Text>
        </Cell>
        <Cell>
          <Text>Value</Text>
        </Cell>
        <Cell>
          <Text></Text>
        </Cell>
      </Head>
      <Row>
        <Cell>
          <Text>Team Size</Text>
        </Cell>
        <Cell>
          <Text>{teamSize ? teamSize : 0}</Text>
        </Cell>
        <Cell>
          <Button text="Edit" onClick={async () => {
            // Clicking the `Edit` button opens the modal
            setModalOpen(true);
          }}>
          </Button>
          {/* If the modal state is open, show the ModalDialog with our data entry form */}
          {isModalOpen && (
            <ModalDialog header="Edit team size" onClose={() => setModalOpen(false)}>
              <Form onSubmit={onSubmit}>
                <TextField name="teamSize" label="Team Size" type="number" autoComplete="off" />
              </Form>
            </ModalDialog>
          )}
        </Cell>
      </Row>
    </Table>
  );
};

export const run = render(
  <ProjectSettingsPage>
    <App />
  </ProjectSettingsPage>
);