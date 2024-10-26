import { Component, For } from 'solid-js';
import { ComponentDoc } from '@solid-ui/docs-utils';
import { styled } from '@solid-ui/utils';
import { useTheme } from '@solid-ui/theme';

interface ComponentDocsProps {
  doc: ComponentDoc;
}

const StyledDocs = styled('div')`
  thead th {
    border-bottom: 1px solid #dcdfe6;
    padding: 8px 10px;
    box-sizing: border-box;
    margin: 0;
    text-align: left;
  }

  tbody td {
    padding: 8px 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #dcdfe6;
  }

  tbody tr:last-child td {
    border: none;
  }
`;

export const ComponentDocs: Component<ComponentDocsProps> = (props) => {
  const { theme } = useTheme();
  return (
    <StyledDocs theme={theme()}>
      <h1>{props.doc.name}</h1>
      <p>{props.doc.description}</p>

      <h2>属性</h2>
      <table>
        <thead>
          <tr>
            <th>属性名</th>
            <th>类型</th>
            <th>默认值</th>
            <th>描述</th>
          </tr>
        </thead>
        <tbody>
          <For each={props.doc.props}>
            {(prop) => (
              <tr>
                <td>
                  {prop.name}
                  {prop.required && ' *'}
                </td>
                <td>
                  <code>{prop.type}</code>
                </td>
                <td>{prop.default || '-'}</td>
                <td>{prop.description}</td>
              </tr>
            )}
          </For>
        </tbody>
      </table>

      <h2>示例</h2>
      <For each={props.doc.examples}>
        {(example) => (
          <div class="example">
            <h3>{example.title}</h3>
            <p>{example.description}</p>
            <div class="example-demo">{example.component()}</div>
            <pre style={{ background: '#282828', color: '#cecdcd' }}>
              <code>{example.code}</code>
            </pre>
          </div>
        )}
      </For>
    </StyledDocs>
  );
};
