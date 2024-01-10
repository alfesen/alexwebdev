import { UploadedFile } from "@nestjs/common";
import { SharpPipe } from "src/pipes/sharp/sharp.pipe";

export function SharpImage(width: number) {
  return UploadedFile(new SharpPipe(width))
}
