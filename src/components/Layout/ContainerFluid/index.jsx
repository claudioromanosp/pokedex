import { ContainerFluidS} from "../../Styles";
function ContainerFluid({ className, children }) {
  return (
    <div className="container-fluid">
      {children}
    </div>
  );
}

export default ContainerFluid;
