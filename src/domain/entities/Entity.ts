import { randomUUID } from 'node:crypto'

export abstract class Entity<Props> {
  protected _id: string
  get id() {
    return this._id
  }

  protected props: Props

  constructor(props: Props, id?: string) {
    this._id = id || randomUUID()
    this.props = props
  }
}
