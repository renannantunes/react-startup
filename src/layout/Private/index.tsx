interface IPrivate {
  element: React.ReactElement;
}

export const Private: React.FC<IPrivate> = ({ element }) => (
  <div>{element}</div>
);
