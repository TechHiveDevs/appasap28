
import { 
  Create,
  SimpleForm,
  
required,
TextInput,
AutocompleteInput,
} from "react-admin";

// ------------------------------------------------

export default function CreateUser(props: any) {
    return (
      <Create>
        <SimpleForm redirect="list">
          <TextInput source="name" variant="outlined" validate={required()}  />
<TextInput source="email" variant="outlined"   />
<AutocompleteInput variant="outlined" source="gender" choices={[
{ id: "Male", name: "Male" },
{ id: "Female", name: "Female" },
]}  />

        </SimpleForm>
      </Create>
    );
  }
