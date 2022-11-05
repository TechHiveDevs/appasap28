
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
TextField,
ReferenceField,
} from "react-admin";

// ------------------------------------------------

export default function ShowPosts(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
<TextField source="title" />
<TextField source="body" />
<ReferenceField source="userId" reference="user" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}