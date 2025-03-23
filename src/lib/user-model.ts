import { Schema, model, Document, models } from 'mongoose';



export interface UserDocument extends UserInput, Document {
	// I have not filled this part but seems to be adding things that get added after creating a user.
	createdAt: Date;
	updatedAt: Date;
}

const userSchema = new Schema<UserDocument>(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
        image: { type: String, default: "" },
        searchHistory: { type: [String], default: [] },    
	},
	{ timestamps: true }
);

// type UserSchemaType = InferSchemaType<typeof userSchema>;
export const User = models.User || model<UserDocument>('User', userSchema);

// const user: UserDocument = {
//     car: 'bmw',
// }