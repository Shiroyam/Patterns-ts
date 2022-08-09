interface IInsurance {
  id: number;
  status: string;
  setVechicle(vechile: any): void;
  submit(): Promise<boolean>;
}

class TFInsurance implements IInsurance {
  id: number;
  status: string;
  private vechile: any;

  setVechicle(vechile: any): void {
    this.vechile = vechile;
  }

  async submit(): Promise<boolean> {
    const result = await fetch("");
    const data = result.json();
    return data;
  }
}

class ABInsurance implements IInsurance {
  id: number;
  status: string;
  private vechile: any;

  setVechicle(vechile: any): void {
    this.vechile = vechile;
  }

  async submit(): Promise<boolean> {
    const result = await fetch("");
    const data = await result.json();
    return data;
  }
}

abstract class InsuranceFactory {
  db: any;
  abstract createInsurance(): IInsurance;

  saveHistory(ins: IInsurance) {
    this.db.save(ins.id, ins.status);
  }
}

class TFInsuranceFactory extends InsuranceFactory {
  createInsurance(): IInsurance {
    return new TFInsurance();
  }
}

const tfInsuranceFactory = new TFInsuranceFactory();
const ins = tfInsuranceFactory.createInsurance();
tfInsuranceFactory.saveHistory(ins);
