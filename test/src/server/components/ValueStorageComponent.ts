import { Component } from "@flamework/components";
import { OnStart } from "@flamework/core";
import { Action } from "@rbxts/shared-components-flamework";
import { ValueStorageComponent } from "shared/components/valueStorageComponent";

@Component({
	tag: "ValueStorageComponent",
})
export class ServerValueStorageComponent extends ValueStorageComponent implements OnStart {
	public onStart() {
		/*task.spawn(() => {
			while (task.wait(3)) {
				this.setValue(this.state.value + 1);
				this.remotes.ping.Broadcast(this.state.value);
			}
		});*/
		this.setValue(this.state.value + 1);

		/*this.remotes.pong.Connect((player, value) => {
			print(`Player ${player.Name} sent value ${value}`);
		});*/
	}

	public OnDisconnectedPlayer(player: Player): void {
		print(`Player ${player.Name} disconnected`);
	}

	@Action()
	private setValue(value: number) {
		return {
			...this.state,
			value,
		};
	}
}
