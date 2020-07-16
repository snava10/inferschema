# inferschema

Schema inference library written in Typescript

# Usage

```
import * as inferschema from "@navadt/inferschema";
import { Schema } from "@navadt/inferschema";

async function f(): Schema {
    const schema: Schema = await inferschema.infer("path_to_file.csv");
    return schema;
}
```
