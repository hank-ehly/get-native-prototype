class CuesController < ApplicationController
  before_action :set_cue, only: [:show, :edit, :update, :destroy]

  # GET /cues
  # GET /cues.json
  def index
    @cues = Cue.all
    if params[:language_module_id]
      @cues = Cue.where(language_module_id: params[:language_module_id]).limit(1)
      videos = @cues.take.videos
    end
    render json: {
      cues: @cues.to_json,
      videos: videos.to_json(include: [:topic, :category, :speaker])
    }
  end

  # GET /cues/1
  # GET /cues/1.json
  def show
  end

  # GET /cues/new
  def new
    @cue = Cue.new
  end

  # GET /cues/1/edit
  def edit
  end

  # POST /cues
  # POST /cues.json
  def create
    @cue = Cue.new(cue_params)
    if @cue.save
      render json: {
        status: :created,
        location: @cue,
        cue: @cue
      }
    else
      render json: {
        errors: @cue.errors,
        status: :unprocessable_entity
      }
    end
  end

  def add_video_to_cue
    cue = Cue.find(params[:cue_id])
    video = Video.find(params[:video_id])
    if cue.videos << video
      render json: {
        status: 'success',
        cue: cue,
        video: video,
        message: 'You successfully added a cue video.'
      }  
    else
      render json: {
        status: :unprocessable_entity
      }
    end
    
  end

  # PATCH/PUT /cues/1
  # PATCH/PUT /cues/1.json
  def update
    respond_to do |format|
      if @cue.update(cue_params)
        format.html { redirect_to @cue, notice: 'Cue was successfully updated.' }
        format.json { render :show, status: :ok, location: @cue }
      else
        format.html { render :edit }
        format.json { render json: @cue.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /cues/1
  # DELETE /cues/1.json
  def destroy
    @cue.destroy
    respond_to do |format|
      format.html { redirect_to cues_url, notice: 'Cue was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_cue
      @cue = Cue.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def cue_params
      params.require(:cue).permit(:language_module_id)
    end
end
