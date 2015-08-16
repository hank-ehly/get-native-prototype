class CollocationsController < ApplicationController
  before_action :set_collocation, only: [:show, :edit, :update, :destroy]

  # GET /collocations
  # GET /collocations.json
  def index
    @collocations = Collocation.where(video_script_id: params[:video_script_id])

    render json: {
      collocations: @collocations.to_json
    }

  end

  # GET /collocations/1
  # GET /collocations/1.json
  def show
  end

  # GET /collocations/new
  def new
    @collocation = Collocation.new
  end

  # GET /collocations/1/edit
  def edit
  end

  # POST /collocations
  # POST /collocations.json
  def create
    @collocation = Collocation.new(collocation_params)

    respond_to do |format|
      if @collocation.save
        format.html { redirect_to @collocation, notice: 'Collocation was successfully created.' }
        format.json { render :show, status: :created, location: @collocation }
      else
        format.html { render :new }
        format.json { render json: @collocation.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /collocations/1
  # PATCH/PUT /collocations/1.json
  def update
    respond_to do |format|
      if @collocation.update(collocation_params)
        format.html { redirect_to @collocation, notice: 'Collocation was successfully updated.' }
        format.json { render :show, status: :ok, location: @collocation }
      else
        format.html { render :edit }
        format.json { render json: @collocation.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /collocations/1
  # DELETE /collocations/1.json
  def destroy
    @collocation.destroy
    respond_to do |format|
      format.html { redirect_to collocations_url, notice: 'Collocation was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_collocation
      @collocation = Collocation.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def collocation_params
      params.require(:collocation).permit(:description, :quote, :video_script_id)
    end
end
