---
to: <%= abs_path %>/<%= component_name %>.tsx
---
<% if (have_style) { -%>
import style from "./style.module.css"
<% } -%>
<% if (have_props) { -%>

export type Props = {
};
<% } -%>

export const <%= component_name %>: <%- type_annotate %> = () => {
  return (
<% if (have_style) { -%>
    <<%= tag %> className={style.module}>
<% } else { -%>
    <<%= tag %>>
<% } -%>
    </<%= tag %>>
  );
}