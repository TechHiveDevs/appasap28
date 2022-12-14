
import { 
  Edit,
  SimpleForm,
  
required,
TextInput,
AutocompleteInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditUser(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <TextInput source="name" variant="outlined" validate={required()}  />
<TextInput source="email" variant="outlined"   />
<AutocompleteInput variant="outlined" source="gender" choices={[
{ id: "Male", name: "Male" },
{ id: "Female", name: "Female" },
]}  />

      </SimpleForm>
    </Edit>
  );
}