import { Lights } from "../enums";

export const LightTypes = Object.values(Lights) as string[];

export const MeshyTypes = ["Mesh", "Group", "SkinnedMesh"];

export const ViewportInteractionAllowed = [...MeshyTypes, ...LightTypes];

export const TypesThatNeedHelpers = [...Object.values(Lights), "Camera"];

export const NonSelectionTypes = ["GridHelper", "AxesHelper"];
