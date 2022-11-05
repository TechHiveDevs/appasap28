
import { 
  Edit,
  SimpleForm,
  
TextInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditPosts(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <TextInput source="title" variant="outlined"   />
<TextInput source="body" variant="outlined"   />
<ReferenceInput label="user" source="userId" reference="user">
        <AutocompleteInput variant="outlined" /* optionText="user"   */ />
      </ReferenceInput>
    

      </SimpleForm>
    </Edit>
  );
}