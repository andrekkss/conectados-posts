import { injectable } from "inversify";

@injectable()
export class PostRepositoryImpl {
    getName(): string {
        return "André kitano dsa"
    }
}