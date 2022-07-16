import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import aktuelles from "./aktuelles";
import termine from "./termine";
import maerkte from "./maerkte";
import oeffnungeszeites from "./oeffnungeszeites";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([aktuelles, termine, maerkte, oeffnungeszeites]),
});
